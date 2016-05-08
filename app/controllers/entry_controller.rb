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
    render_to_string partial: 'entry', locals: { entry => @entry }
  end

  def destroy
    binding.pry
    @entry = Entry.find(params[:id])
    @entry.delete
    @entries= Entry.all
    redner json: @entries
  end

  def entry_params
    params.permit(:quality, :binged, :suicidal)
  end
end
