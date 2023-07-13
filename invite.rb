require 'yaml'

data = YAML.load(File.read(File.join(Dir.pwd, '_data', 'guests.yml')))

data.each do |code, guests|
  template = File.read(File.join(Dir.pwd, 'invitation_template.html'))

  updated_template = template.gsub('%{invite_code}', code)
  dir_path = File.join(Dir.pwd, 'invitations', code)

  Dir.mkdir(dir_path) unless Dir.exists?(dir_path)

  file_path = File.join(dir_path,'index.html')

  File.open(file_path, 'w') { |f| f.write(updated_template) }

  puts "https://glydelwin2023.github.io/invitations/#{code}"
end
