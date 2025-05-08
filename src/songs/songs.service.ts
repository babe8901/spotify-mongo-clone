import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song';
import { Model } from 'mongoose';

@Injectable()
export class SongsService {
  constructor(
    @InjectModel(Song.name) private readonly songModel: Model<SongDocument>,
  ) {}

  async create(createSongDto: CreateSongDto): Promise<Song> {
    return await this.songModel.create(createSongDto);
  }

  findAll() {
    return this.songModel.find();
  }

  findById(id: string) {
    return this.songModel.findById(id);
  }

  update(id: string, updateSongDto: UpdateSongDto) {
    return this.songModel.updateOne({ _id: id }, updateSongDto);
  }

  delete(id: string) {
    return this.songModel.deleteOne({ _id: id });
  }
}
