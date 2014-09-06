class Product < ActiveRecord::Base

  def has_price?
          !price.blank?
  end
  def has_name?
          !name.blank?
  end
  def has_description?
          !description.blank?
  end

end
