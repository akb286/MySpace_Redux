class Api::MyspacesController < ApplicationController
  before_action :set_myspace, only: [:show, :update, :destroy]

  def index
    render json: Myspace.all
  end

  def show
    render json: @myspace
  end

  def create
    myspace = Myspace.new(myspace_params)

    if myspace.save
      render json: myspace
    else
      render json: myspace.errors, status: 422
    end
  end

  def update
    if @myspace.update(myspace_params)
      render json: @myspace
    else
      render json: @myspace.errors, status: 422
    end
  end

  def destroy
    @myspace.destroy
  end

  private
    def set_myspace
      @myspace = Myspace.find(params[:id])
    end

    def myspace_params
      params.require(:myspace).permit(:name, :description, :price, :department)
    end
end
