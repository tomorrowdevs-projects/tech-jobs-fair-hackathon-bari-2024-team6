<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\Player;
use App\Events\StartEvent;
use App\Events\AnswerEvent;
use App\Events\EndGameEvent;
use Illuminate\Http\Request;
use App\Events\QuestionEvent;
use App\Events\QuestionTimeoutEvent;

class EventsController extends Controller
{
    public function startGame($gameId)
    {
        $game = Game::findOrFail($gameId);
        $game->status = 'started';
        $game->save();

        // Emitting the start event
        event(new StartEvent('Game started'));

        return response()->json(['message' => 'Game started']);
    }


public function sendQuestion($gameId, Request $request)
    {
        $game = Game::findOrFail($gameId);
        $question = $request->question;

        // Emitting the question event
        event(new QuestionEvent($question));

        return response()->json(['message' => 'Question sent']);
    }

    public function submitAnswer(Request $request, $gameId)
    {
        $game = Game::findOrFail($gameId);
        $player = Player::where('name', $request->player_name)->firstOrFail();

        $answer = $request->answer;

        // Save the answer logic here...

        // Emitting the answer event
        event(new AnswerEvent($player->name, $answer));

        return response()->json(['message' => 'Answer submitted']);
    }

    public function questionTimeout($gameId)
    {
        $game = Game::findOrFail($gameId);

        // Emitting the question timeout event
        event(new QuestionTimeoutEvent('Question timed out'));

        return response()->json(['message' => 'Question timed out']);
    }

    public function endGame($gameId)
    {
        $game = Game::findOrFail($gameId);
        $game->status = 'ended';
        $game->save();

        // Emitting the end game event
        event(new EndGameEvent('Game ended'));

        return response()->json(['message' => 'Game ended']);
    }
}