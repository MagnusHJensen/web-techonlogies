<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    //

    public function print(Request $request) {

        return view('users.print')
            ->with([
                'names' => [$request->input('firstName'), $request->input('lastName')]
            ]);
    }
}
