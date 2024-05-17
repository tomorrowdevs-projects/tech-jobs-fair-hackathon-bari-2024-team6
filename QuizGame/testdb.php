<?php

require __DIR__ . '/vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client(['base_uri' => 'https://opentdb.com/']);
$response = $client->get('api.php', ['query' => ['amount' => 10]]);
$questions = json_decode($response->getBody(), true);

print_r($questions);
