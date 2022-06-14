<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $startDate = $this->faker->dateTimeThisYear("-30 days");
        $endDate = (clone $startDate)->modify("+1 day");
        return [
            //
            'name'          =>  $this->faker->name(),
            'created_by'    =>  1,
            'start_date'    =>  $startDate,
            'end_date'      =>  $endDate
        ];
    }
}
