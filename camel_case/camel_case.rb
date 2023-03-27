class String
  def camel_case
    words = self.split(/\s+/)
    capitalized_words = words.map { |word| word.capitalize }
    capitalized_words.join('')
  end
end

puts 'hello case'.camel_case
puts 'antony osebe'.camel_case