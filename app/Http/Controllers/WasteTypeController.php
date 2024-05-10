<?php

namespace App\Http\Controllers;

use App\Models\WasteType;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class WasteTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $data = WasteType::all();

        return Inertia::render('WasteType/Index', compact('data'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required'],
        ]);

        try {
            $data = WasteType::create([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'image' => $request->image,
            ]);
            return redirect()->route('waste-type')->with('success', 'Data gagal ditambahkan');
        } catch (\Throwable $th) {
            return redirect()->route('waste-type')->with('error', 'Data gagal ditambahkan');
        }
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => ['required', 'string'],
            'description' => ['required', 'string'],
            'price' => ['required'],
        ]);

        try {
            $data = WasteType::find($id);
            $data->update([
                'name' => $request->name,
                'description' => $request->description,
                'price' => $request->price,
                'image' => $request->image,
            ]);
            return redirect()->route('waste-type')->with('success', 'Data berhasil diubah');
        } catch (\Throwable $th) {
            return redirect()->route('waste-type')->with('error', 'Data gagal diubah');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = WasteType::find($id);
        $data->delete();

        return redirect()->route('waste-type')->with('success', 'Data berhasil dihapus');
    }
}
