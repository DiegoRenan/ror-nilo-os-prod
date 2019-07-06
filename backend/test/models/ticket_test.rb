# == Schema Information
#
# Table name: tickets
#
#  id          :uuid             not null, primary key
#  body        :text
#  conclude_at :date
#  title       :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class TicketTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
