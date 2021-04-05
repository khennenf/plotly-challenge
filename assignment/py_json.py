import json
from pprint import pprint

with open('samples.json', 'r') as jsonfile:
    samples_json = json.load(jsonfile)
    # pprint(samples_json)
    
    ids = samples_json["names"]
    # pprint(ids)

    metadata = samples_json["metadata"]
    # pprint(metadata)

    age_metadata = metadata[1]["age"]
    # pprint(age_metadata)

    samples_data = samples_json["samples"][50]
    pprint(samples_data)

