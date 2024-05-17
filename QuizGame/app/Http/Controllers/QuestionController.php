<?php

namespace App\Http\Controllers;

use App\Services\TriviaService;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    protected $triviaService;

    public function __construct(TriviaService $triviaService)
    {
        $this->triviaService = $triviaService;
    }

    public function fetchQuestions(Request $request)
    {
        $amount = $request->query('amount', 10);
        $category = $request->query('category');
        $difficulty = $request->query('difficulty');
        $type = $request->query('type');

        $questions = $this->triviaService->getQuestions($amount, $category, $difficulty, $type);

        return response()->json($questions);
    }
}
