<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

use App\Models\Page;

class PageController extends Controller
{

    public function list()
    {
        $page = Page::all();
        return $page;
    }

    public function details(Page $page)
    {
        if($page)
        {
            return $page;
        }
        else
        {
            return response()->json([
                'errors' => [
                    'page' => 'Not found.',
                    ]
            ], 404);
        }
    }
    
    public function add(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image',
        ]);

        $page = new Page();
        $page->fill($request->all());
        if($request->file('image'))
        {
            $image = $request->file('image');
            $page->image = base64_encode(file_get_contents($image->getRealPath()));
        }
        $page->save();

        return $page;
    }

    public function edit(Request $request, Page $page)
    {
        $request->validate([
            'title' => 'required',
            'content' => 'required',
            'image' => 'nullable|image',
        ]);

        if($page)
        {
            $page->fill($request->all());
            
            if($request->file('image'))
            {
                $image = $request->file('image');
                $page->image = base64_encode(file_get_contents($image->getRealPath()));
            }

            $page->save();

            return $page;
        }
        else
        {
            return response()->json([
                'errors' => [
                    'page' => 'Not found.',
                    ]
            ], 404);
        }
    }

    public function delete(Page $page)
    {
        $page->delete();
        
        return response()->json([
            'success' => 'Record deleted successfully!'
        ]);    
    }
}