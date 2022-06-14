<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class AdminPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $role = Role::create([
            'name'  =>  'admin'
        ]);

        $userPermissions = [
            'create project',
            'update project',
            'end project'
        ];

        foreach ($userPermissions as $permission)   {
            $role->givePermissionTo($permission);
        }
    }
}
