class MoviesController < ApplicationController

  def index
    @movies = Movie.all
  end

  def new
  end

  def create
    movie = Movie.create :title => params[:title], :image => params[:image], :released_date => params[:released_date], :ratings => params[:ratings], :synopsis => params[:synopsis]

    redirect_to movies_path(movie.id)
  end

  def show
    @movie = Movie.find params[:id]
  end

  def destroy
    movie = Movie.find params[:id]
    movie.destroy
    redirect_to movies_path
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.update :title => params[:title], :image => params[:image], :released_date => params[:released_date], :ratings => params[:ratings], :synopsis => params[:synopsis]

    redirect_to movie_path(movie.id)
  end

end
