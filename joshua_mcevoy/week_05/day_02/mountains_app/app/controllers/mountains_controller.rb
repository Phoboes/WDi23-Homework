class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :first_climber => params[:first_climber], :year_climbed => params[:year_climbed], :height => params[:height], :deaths => params[:deaths]
    redirect_to mountains_path(mountain.id)
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
    mountain.update :name => params[:name], :image => params[:image], :first_climber => params[:first_climber], :year_climbed => params[:year_climbed], :height => params[:height], :deaths => params[:deaths]
    redirect_to mountain_path(mountain.id)
  end


end
