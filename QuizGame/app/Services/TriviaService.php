<?php

namespace App\Services;

use GuzzleHttp\Client;

class TriviaService
{
    protected $client;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://opentdb.com/',
            'timeout'  => 2.0,
        ]);
    }

    public function getQuestions($amount = 10, $category = null, $difficulty = null, $type = null)
    {
        $query = [
            'amount' => $amount,
        ];

        if ($category) {
            $query['category'] = $category;
        }

        if ($difficulty) {
            $query['difficulty'] = $difficulty;
        }

        if ($type) {
            $query['type'] = $type;
        }

        $response = $this->client->get('api.php', [
            'query' => $query,
        ]);

        return json_decode($response->getBody()->getContents(), true);
    }
}
