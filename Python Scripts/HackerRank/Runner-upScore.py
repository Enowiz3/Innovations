if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    unique_scores = list(set(arr))  # Remove duplicates
    unique_scores.sort(reverse=True)  # Sort in descending order

    print(unique_scores[1])  # The second highest score