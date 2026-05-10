#!/usr/bin/python3
"""
Module defining the Square class that inherits from Rectangle.
"""
Rectangle = __import__('9-rectangle').Rectangle


class Square(Rectangle):
    """A class representing a square, inheriting from Rectangle."""

    def __init__(self, size):
        """
        Initialize a new Square.

        Args:
            size (int): The size of the square's sides.
        """
        # Validate size using the method inherited from BaseGeometry
        self.integer_validator("size", size)
        
        # Initialize the parent Rectangle with size as both width and height
        super().__init__(size, size)
        
        # Store size as a private attribute
        self.__size = size

    def area(self):
        """Calculates and returns the area of the square."""
        return self.__size ** 2
