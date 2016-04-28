# == Schema Information
#
# Table name: entries
#
#  id                 :integer          not null, primary key
#  quality            :integer
#  binged?            :boolean
#  suicidal_ideation? :boolean
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

require 'test_helper'

class EntryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
