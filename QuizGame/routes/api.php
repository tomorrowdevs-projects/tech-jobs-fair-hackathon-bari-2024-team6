<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GameController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\QuestionController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');



//Routes fot start game/create player
Route::post('/games', [GameController::class, 'store']);
Route::post('/games/{game}/players', [PlayerController::class, 'store']);

//routes for events
Route::post('/game/{gameId}/start', [EventsController::class, 'startGame']);
Route::post('/game/{gameId}/question', [EventsController::class, 'sendQuestion']);
Route::post('/game/{gameId}/answer', [EventsController::class, 'submitAnswer']);
Route::post('/game/{gameId}/timeout', [EventsController::class, 'questionTimeout']);
Route::post('/game/{gameId}/end', [EventsController::class, 'endGame']);

//Route for questions
Route::get('/questions', [QuestionController::class, 'fetchQuestions']);
