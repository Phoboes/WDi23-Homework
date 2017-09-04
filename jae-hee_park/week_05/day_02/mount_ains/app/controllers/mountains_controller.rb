class MountainsController <ApplicationController
  def index
    @mountains = Mountain.all
  end

  def new
  end

  def create
    # raise params.inspect
    mountain = Mountain.new
    mountain.name = params[:name]
    mountain.image = params[:image]
    mountain.location = params[:location]
    mountain.elevation = params[:elevation]
    mountain.prominence = params[:prominence]
    mountain.isolation = params[:isolation]
    mountain.save
    redirect_to mountain_path(mountain.id)
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
    mountain.update :name => params[:name], :image => params[:image], :location => params[:location], :elevation => params[:elevation], :prominence => params[:prominence], :isolation => params[:isolation]
    redirect_to mountain_path(mountain.id)
  end
end
