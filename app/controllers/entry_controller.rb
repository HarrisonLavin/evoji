class EntryController < ApplicationController


  def index
    @entries = Entry.all
  end

  def new
    @entry = Entry.new()
    @entries = Entry.all
  end

  def create
    @entry = Entry.create(entry_params)
    render json: @entry
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.delete
  end

  def entry_params
    params.permit(:quality, :binged, :suicidal)
  end
end
