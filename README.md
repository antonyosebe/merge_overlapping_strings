# merge_overlapping_strings

# problem

    Write a function that merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

    NOTE: The algorithm should always use the longest possible overlap.

# Example 1

    given: "abcde" + "cdefgh"
    return: "abcdefgh"

# Example 2

    given:"abaab" + "aabab"
    return:"abaabab"

# PseudoCode

    1.take two strings, s1 and s2, as input.
    2.initialize a variable overlap to 0, which will hold the length of the overlap between the two strings
    3.loop over using a for loop and use slice to extract the end of s1 and the beginning of s2 and compare them to check for a match.
    4.If there is a match,update the overlap variable to i, which is the length of the overlap.
    5.Return the concatenate of the two strings, but we only include the part of s2 that comes after the overlap (s2.slice(overlap)).

# Code

    The code is available in merge_two_strings.js
