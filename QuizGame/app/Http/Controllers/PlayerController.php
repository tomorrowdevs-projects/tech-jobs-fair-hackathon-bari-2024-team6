<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function store(Request $request, Game $game)
    {
        $player = new Player();
        $player->name = $request->name;
        $player->game_id = $game->id;
        $player->save();

        return response($player);
    }
}
