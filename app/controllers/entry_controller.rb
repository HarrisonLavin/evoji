class EntryController < ApplicationController
  def show
  end

  def index
    @entries = Entry.where(user_id: current_user.id)
  end

  def new
    @entry = Entry.new()
  end

  def create
    @entry = Entry.create(entry_params)
    render json: @entry
  end

  def destroy
  end

  def entry_params
    params.permit(:quality, :binged, :suicidal)
  end
end
