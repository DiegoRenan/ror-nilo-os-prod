class TicketSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :conclude_at

  belongs_to :company
  def attributes(*args)
    h = super(*args)
    h[:conclude_at] = object.conclude_at.to_time.iso8601 unless object.conclude_at.blank?
    h
  end
end
