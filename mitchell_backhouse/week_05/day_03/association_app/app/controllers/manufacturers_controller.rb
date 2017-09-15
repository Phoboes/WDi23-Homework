class ManufacturersController < ApplicationController
  def index
    @manufacturers = Manufacturer.all
  end

  def new
    @manufacturer = Manufacturer.new
  end

  def create
    manufacturer = Manufacturer.create manufacturer_params

    redirect_to manufacturer
  end

  def edit
    @manufacturer = Manufacturer.friendly.find params[:id]
  end

  def update
    manufacturer = Manufacturer.friendly.find params[:id]
    manufacturer.update manufacturer_params

    redirect_to manufacturer
  end

  def show
    @manufacturer = Manufacturer.friendly.find params[:id]
  end

  def delete
    manufacturer = Manufacturer.friendly.find params[:id]
    manufacturer.destroy

    redirect_to manufacturers_path
  end

  private

  def manufacturer_params
    params.require(:manufacturer).permit(:name, :founded, :description, :image)
  end
end
