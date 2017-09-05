class PagesController < ApplicationController
  def home
  end

  def numbers
    @amount = 234
    @large_number = 2329879428374
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friends_count = 1
    @enemies_count = 2
    @story = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  end

  def assets
    
  end

  def url
  end

end
