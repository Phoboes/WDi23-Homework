class OceansController < ApplicationController

  def index
    @oceans = Ocean.all
  end


  def new
  end


  def create
    ocean = Ocean.create :name => params[:name], :image => params[:image], :area => params[:area], :volume => params[:volume], :depth => params[:depth]
    redirect_to ocean_path(ocean.id)
  end


  def show
    @ocean = Ocean.find params[:id]
  end


  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path
  end


  def edit
    @ocean = Ocean.find params[:id]
  end


  def update
    ocean = Ocean.find params[:id]
    ocean.update :name => params[:name], :image => params[:image], :area => params[:area], :volume => params[:volume], :depth => params[:depth]
    redirect_to ocean_path(ocean.id)
  end
end
