class TasksController < ApplicationController
  def index
    @tasks = Task.all

    respond_to do |format|
      format.html {render 'index'}
      format.json {render json: @tasks, status: 200}
    end
  end

  def create
    @task = Task.new(name: params[:name])

    respond_to do |format|
      if @task.save
        format.json {render json: @task, status: 200}
      else
        format.json {render json: {errors: @task.errors.full_messages}, status: 400}
      end
    end
  end

  def update
    @task = Task.find(params[:id])

    respond_to do |format|
      if @task.update(finished: params[:finished])
        format.json {render json: @task, status: 200}
      else
        format.json {render json: {errors: @task.errors.full_messages}, status: 400}
      end
    end
  end
end
