import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Tasks from "./Tasks";
import { ProjectProvider } from "../context/ProjectContext";
import { describe, it, expect } from "vitest"


describe("Tasks", () => {
  it("renders the component", async () => {
    if (typeof window !== 'undefined') {
      
    render(
      <ProjectProvider>
        <Tasks />
      </ProjectProvider>
    );
    expect(screen.getByText("Tasks")).toBeInTheDocument();
}});

  it("opens the add task dialog when the button is clicked", () => {
    if (typeof window !== 'undefined') {
    render(
      <ProjectProvider>
        <Tasks />
      </ProjectProvider>
    );
    fireEvent.click(screen.getByText("Add a Task"));
    expect(screen.getByText("Pick a Project")).toBeInTheDocument();
}});

  it("adds a task when the add button is clicked", () => {
    if (typeof window !== 'undefined') {
    render(
      <ProjectProvider>
        <Tasks />
      </ProjectProvider>
    );
    fireEvent.click(screen.getByText("Add a Task"));
    fireEvent.change(screen.getByPlaceholderText("Taskname"), {
      target: { value: "test task" },
    });
    fireEvent.click(screen.getByText("Add"));
    expect(screen.getByText("test task")).toBeInTheDocument();
}});

  it("deletes a task when the delete button is clicked", () => {
    if (typeof window !== 'undefined') {
    render(
      <ProjectProvider>
        <Tasks />
      </ProjectProvider>
    );
    fireEvent.click(screen.getByText("Add a Task"));
    fireEvent.change(screen.getByPlaceholderText("Taskname"), {
      target: { value: "test task" },
    });
    fireEvent.click(screen.getByText("Add"));
    fireEvent.click(screen.getByText("delete"));
    expect(screen.queryByText("test task")).not.toBeInTheDocument();
    
}});
});

