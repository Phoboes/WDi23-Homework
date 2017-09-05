Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :height =>8848, :parent => 'none', :first_ascent => 1953, :country => 'Nepal, China'

Mountain.create :name => 'K2', :height =>4020, :parent => 'Mount Everest', :first_ascent => 1954, :country => 'Pakistan, China'

Mountain.create :name => 'Kangchenjunga', :height =>3922, :parent => 'Mount Everest', :first_ascent => 1955, :country => 'Nepal, India'

Mountain.create :name => 'Lhotse', :height =>610, :parent => 'Mount Everest', :first_ascent => 1956, :country => 'Nepal, China'

Mountain.create :name => 'Makalu', :height =>2378, :parent => 'Mount Everest', :first_ascent => 1955, :country => 'Nepal, China'
