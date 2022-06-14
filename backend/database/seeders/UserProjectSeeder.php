<?php

namespace Database\Seeders;

use App\Models\UserProject;
use Illuminate\Database\Seeder;

class UserProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for($i = 1;$i<=10;$i++){
            UserProject::create([
                'user_id'       =>  $i,
                'project_id'    =>  $i
            ]);
        }
    }
}
