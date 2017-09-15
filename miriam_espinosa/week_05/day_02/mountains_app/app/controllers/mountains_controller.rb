class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

  def new
    render :new
  end

  def create
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.height = params[:height]
    mountain.parent = params[:parent]
    mountain.first_ascent = params[:first_ascent]
    mountain.country = params[:country]
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
    mountain.update :name => params[:name], :image => params[:image], :height => params[:height], :parent => params[:parent], :first_ascent => params[:first_ascent], :country => params[:country]
    redirect_to mountain_path(mountain.id)
  end

end
