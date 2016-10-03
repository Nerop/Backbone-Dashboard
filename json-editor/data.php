<?php

namespace App;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Zend\Diactoros\Response;
use Zend\Diactoros\Server;
use Zend\Diactoros\ServerRequestFactory;

require_once __DIR__ . '/vendor/autoload.php';

$handler = function(ServerRequestInterface $request, ResponseInterface $response){
    $query = $request->getQueryParams();
    $file  = array_key_exists('file', $query) ? $query['file'] : null;
    $id    = array_key_exists('id', $query) ? $query['id'] : null;

    if (!$file || !file_exists(__DIR__ . '/' . $file)) {
        throw new \RuntimeException(sprintf('File %s not exists', $file));
    }

    $file = __DIR__ . '/' . $file;

    switch (strtoupper($request->getMethod())) {
        case 'DELETE':
            $data = json_decode(file_get_contents($file));

            $i = null;
            foreach ($data as $key => $row) {
                if ($row['id'] == $id) {
                    $i = $key;
                }
            }

            if ($i !== null) {
                unset($data[$i]);
            }

            file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
            return $response->withStatus(200);
        case 'POST':
            $data = json_decode(file_get_contents($file));

            $i = 0;
            foreach ($data as $key => $row) {
                if ($row['id'] > $i) {
                    $i = $row['id'];
                }
            }

            $i++;
            $row = (array) $request->getParsedBody();
            $row['id'] = $i;

            $data[] = $row;

            file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
            $response = $response->getBody()->write(json_encode($row));
            break;
        case 'PUT':
            if (!$id) {
                throw new \InvalidArgumentException('Id query parameter is required');
            }

            $data = json_decode(file_get_contents($file));

            foreach ($data as $key => $row) {
                if ($row['id'] == $id) {
                    $data[$key] = (array) $request->getParsedBody();
                }
            }

            file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
            return $response->withStatus(200);
            break;
        default:
            if ($id) {
                $data = json_decode(file_get_contents($file));

                $item = null;
                foreach ($data as $key => $row) {
                    if ($row['id'] == $id) {
                        $item = $row;
                    }
                }

                if (!$item) {
                    throw new \RuntimeException(sprintf('Record with id == %s not found', $id));
                }

                $response->getBody()->write(json_encode($item));
            } else {
                $response->getBody()->write(file_get_contents($file));
            }
    }

    return $response->withHeader('Content-Type', 'application/json');
};

$server = Server::createServerFromRequest($handler, ServerRequestFactory::fromGlobals(), new Response());
$server->listen();