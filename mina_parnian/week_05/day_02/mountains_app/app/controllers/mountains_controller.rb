class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.height = params[:place]
    mountain.image = params[:image]
    mountain.save
    redirect_to mountains_path
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_path
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update :name => params[:name], :height => params[:height], :place => params[:place], :image => params[:image]
    redirect_to mountain_path(mountain.id)
  end
end
