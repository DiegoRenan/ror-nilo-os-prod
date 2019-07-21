class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name

  #Associations
  has_many :tickets

  #HATEOAS
  link(:self) { company_url(object.id) }
end
