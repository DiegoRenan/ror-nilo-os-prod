namespace :dev do
  desc "Configura o ambiente de desenvolvimento"
  
  puts "Cadastrando Tickets..."
  
  task setup: :environment do
    100.times do |i|
      Ticket.create!(
        title: Faker::Lorem.sentence(3),
        body: Faker::Lorem.paragraph(2, false, 4),
        conclude_at: Faker::Date.between(20.days.ago, 30.days.from_now)
      )
    end
  end

  puts "Tickets cadastrados com sucesso!"

end
