<?php

namespace App\Http\Controllers;

use App\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function index()
    {
      $blogs = Blog::all();

      return $blogs->toJson();
    }  

    public function test()
    {
        return "Hitting";
    }  
}
