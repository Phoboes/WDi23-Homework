class CarsController < ApplicationController
  def index
    @cars = Car.all
  end

  def new
    @car = Car.new
  end

  def create
    car = Car.create car_params

    redirect_to car
  end

  def edit
    @car = Car.friendly.find params[:id]
  end

  def update
    car = Car.friendly.find params[:id]
    car.update car_params

    redirect_to car
  end

  def show
    @car = Car.friendly.find params[:id]
  end

  def delete
    car = Car.friendly.find params[:id]
    car.destroy

    redirect_to cars_path
  end

  private

  def car_params
    params.require(:car).permit(:make, :model, :hp, :tq, :category, :image, :manufacturer_id)
  end
end
