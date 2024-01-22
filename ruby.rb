# UNIT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# Create the code that makes all Bike specs pass.
# Run the file with the following command: $ rspec ruby_spec.rb

# Add comments to your code explaining your approach

class Bike
    # Create accessor methods for model, wheels, and current_speed
    attr_accessor :model, :wheels, :current_speed

    # Initialize a new Bike object with a given model
    def initialize(model)
        # Set the model, default the wheels to 2, and default the current_speed to 0.
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    # Method to increase the bike speed by a given amount
    def pedal_faster(amount)
    # Increment the current_speed by the specified amount
        @current_speed += amount 
    end

    # Method to decrease the bike's speed by a given amount
    def brake(amount)
    # Set current_speed to the max of (current_speed - amount) and 0
        @current_speed = [@current_speed - amount, 0].max
    end

    # Method to retrieve info about the bike
    def bike_info
    # Return a string describing the bike model, wheels and current_speed in mph
        "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end