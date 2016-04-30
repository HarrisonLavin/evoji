# == Schema Information
#
# Table name: entries
#
#  id         :integer          not null, primary key
#  quality    :integer
#  binged     :boolean
#  suicidal   :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Entry < ActiveRecord::Base
  belongs_to :user
end
