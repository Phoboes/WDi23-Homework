class MountainsController < ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
    @mountain = Mountain.new    
  end

  def create
    mountain = Mountain.create name: params[:mountain][:name], image: params[:mountain][:image], location: params[:mountain][:location], elevation: params[:mountain][:elevation], description: params[:mountain][:description]

    redirect_to mountain_path(mountain)
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update name: params[:mountain][:name], image: params[:mountain][:image], location: params[:mountain][:location], elevation: params[:mountain][:elevation], description: params[:mountain][:description]

    redirect_to mountain_path(mountain)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy

    redirect_to mountains_path
    
  end

end
