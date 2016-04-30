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
    Entry.new()
  end

  def destroy
  end
end
