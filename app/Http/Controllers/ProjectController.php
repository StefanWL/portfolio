<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

use App\Models\Project;

class ProjectController extends Controller
{

    public function list()
    {
        $projects = Project::all();
        return $projects;
    }

    public function details(Project $project)
    {
        if($project)
        {
            return $project;
        }
        else
        {
            return response()->json([
                'errors' => [
                    'project' => 'Not found.',
                    ]
            ], 404);
        }
    }
    
    public function add(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'url' => 'url|nullable',
            'repository' => 'url',
            'content' => 'required',
            'image' => 'nullable|image',
        ]);

        $project = new Project();
        $project->fill($request->all());
        if($request->file('image'))
            {
                $image = $request->file('image');
                $project->image = base64_encode(file_get_contents($image->getRealPath()));
            }
        $project->save();

        return $project;
    }

    public function edit(Project $project, Request $request)
    {
        $request->validate([
            'title' => 'required',
            'url' => 'url|nullable',
            'repository' => 'url',
            'content' => 'required',
            'image' => 'nullable|image',
        ]);

        if($project)
        {
            $project->fill($request->all());
            if($request->file('image'))
            {
                $image = $request->file('image');
                $project->image = base64_encode(file_get_contents($image->getRealPath()));
            }
            $project->save();

            return $project;
        }
        else
        {
            return response()->json([
                'errors' => [
                    'project' => 'Not found.',
                    ]
            ], 404);
        }
    }

    public function delete(Project $project)
    {
        $project->delete();
        
        return response()->json([
            'success' => 'Record deleted successfully!'
        ]);    
    }
}
