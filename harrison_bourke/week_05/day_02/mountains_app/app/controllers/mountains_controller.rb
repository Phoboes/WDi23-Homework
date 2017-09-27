class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all

    render :index
  end

  def new
    render :new
  end

  def create
    mountain = Mountain.create :name => params[:name], :image => params[:image], :country => params[:country], :elevation => params[:elevation]

    redirect_to mountains_path
  end

  def show
    @mountain = Mountain.find params[:id]

    render :show
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
  end

  def edit
    @mountain = Mountain.find params[:id]

    render :edit
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update :name => params[:name], :image => params[:image], :country => params[:country], :elevation => params[:elevation]

    redirect_to mountain_path(mountain.id)
  end

end
