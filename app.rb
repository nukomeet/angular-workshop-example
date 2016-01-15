require 'sinatra'
require 'json'

set :static, true
set :public_folder, '.'

$tasks = JSON.parse(File.read(File.join('app', 'data', 'tasks.json')))
$id = $tasks.count + 1

get '/' do
  File.read(File.join('.', 'index.html'))
end

get '/tasks' do
  content_type :json

  $tasks.to_json
end

get '/tasks/:id' do
  content_type :json
  task = $tasks.find{ |t| t["id"] == params[:id].to_i }
  if task
    task.to_json
  else
    status 404
  end
end

post '/tasks' do
  content_type :json
  task = JSON.parse(request.body.read)

  task["id"] = $id
  task["created_at"] = Time.now

  $tasks << task
  $id += 1

  status 201
end

delete '/tasks/:id' do
  content_type :json

  task = $tasks.find{ |t| t["id"] == params[:id].to_i }
  if task
    task.to_json
  else
    status 404
  end
end
