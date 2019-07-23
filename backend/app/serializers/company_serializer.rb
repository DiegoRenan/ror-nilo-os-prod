class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name

  #Associations
  has_many :tickets do 
    link(:related) {company_tickets_url(object.id)}
  end

  #HATEOAS
  link(:self) { company_url(object.id) }
end
