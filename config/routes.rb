Rails.application.routes.draw do
  get '/' => 'tasks#index'
  get '/tasks' => 'tasks#index'
  post '/tasks' => 'tasks#create'
  put '/tasks/:id' => 'tasks#update'
end
