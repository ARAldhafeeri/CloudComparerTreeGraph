## The follwing project uses vis to output graph in simple html pages.
   -   https://visjs.org/ 
   - below format of data for each graph 

- labeled nodes network graph visjs

      ```JSON
            [
                [
                    {
                      "name": "node 1",
                      "id": "unique_id_1",
                    },
                    {
                      "name": "node 2",
                      # ...
                    }
              ],
              [
                    {
                      "from": "unique_id_1",
                      "to": "unique_id_2"
                    },
                    {
                      # ...
                    }
              ]
            ]
      ```

- labeled nodes network graph 3d

      ```JSON
            {
                "nodes": [
                    {
                      "title": "node 1",
                      "id": "unique_id_1",
                    },
                    {
                      "title": "node 2",
                      # ...
                    }
              ],
              "links": [
                    {
                      "source": "unique_id_1",
                      "target": "unique_id_2"
                    },
                    {
                      # ...
                    }
              ]
            }
      ```

- labeled nodes network graph 3d

      ```JSON
            {
                "name": "Top Level",
                "id": "uuid.v4()"
                "children": [
                  { 
                    "name": "Level 2: A",
                    "id": "uuid.v4()",
                    "children": [
                      { "name": "Son of A" },
                      { "name": "Daughter of A" }
                    ]
                  },
                  { 
                    "name": "Level 2: B", 
                    "id": "uuid.v4()",
                  }
                ]
              };
      ```

  YmAL to json converter https://github.com/yaml/pyyaml
  ./yml_to_json 
  Ymal data formatter 
  https://jsonformatter.curiousconcept.com/#

 # actual format at CloudComparer

 The actual format can be visulized by transform it into json. But the process is tiduous, instead we will format the data just like TreeGraph3D.json

 actual format:
 data.yml
 data.json

 needed format:
 TreeGraph3d.json
 ```JSON

 {
    "name": "name",
    "id": "27fe04e0-f4cb-11ec-8fc3-03d18db18396",
    "icon": "./data/img/cloudproviders/<service-key>/imageName.png",
    "childreen": [
        {
            "name": "app",
            "id": "27fe04e1-f4cb-11ec-8fc3-03d18db18396",
            "childreen": [
                {
                  # ..childreen + 1
                }
            ]
            # parent + 1
            # childreen + 1
        }
    ], 
      # parent + 1
      # childreen + 1
 }

 ```

 how to format ?
 - yml_to_json juyber notebook 